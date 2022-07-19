<template>
  <div>
    <div class="top-bar">
      <div
        class="logo-left"
        style="cursor:pointer;"
        @click="gotoPath('/')"
      >
        <img
          src="@/assets/logo.png"
          class="logo-image"
        />
      </div>
      <div class="title">
        <span>自动化标注平台</span>
      </div>
    </div>
    <div class="auto-mark">
      <div class="right">
        <div class="op-col">
          <h3>文件列表</h3>
          <a-button
            type="primary"
            @click="DialogVisible=true"
          >上传压缩文件</a-button>
        </div>
        <a-list
          size="small"
          :data-source="fileList"
        >
          <a-list-item
            slot="renderItem"
            class="listItem"
            slot-scope="item"
            @click="openFile(item.fileurl)"
          >
            <a-icon type="file-text" />&nbsp;{{ item.filename }}
          </a-list-item>
        </a-list>
      </div>
      <div class="left">
        <div style="margin-bottom: 5px; color: #c0c4cc">
          <a-icon type="underline" />&nbsp;选取文字后使用鼠标右键进行标注
        </div>
        <a-dropdown
          :trigger="['contextmenu']"
          @visibleChange="getSelection"
        >
          <a-card :bordered="false">
            <p
              v-html="htmlText"
              class="paintHtml"
            ></p>
          </a-card>
          <a-menu
            slot="overlay"
            class="menuHover"
          >
            <template v-for="item in entityColor">
              <a-menu-item
                :key="item.name"
                :disabled="annotation"
                @click="annotationLabel(item.color,item.name)"
              >
                <a-icon
                  type="highlight"
                  theme="filled"
                  style="font-size:16px;"
                  :style="{color:item.color}"
                /> {{item.name}}
              </a-menu-item>
              <a-menu-divider />
            </template>

            <a-menu-item key="cancle">
              <a-icon type="close-square" />&nbsp;取消
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="right">
        <h3>手动标注实体列表</h3>
        <a-list
          size="small"
          :data-source="labelList"
        >
          <a-list-item
            slot="renderItem"
            slot-scope="item, index"
          >
            <a
              slot="actions"
              @click="deleteItem(index)"
            >删除</a>
            <a-icon
              type="tag"
              theme="filled"
              :style="{ color: item.color }"
            />【{{item.type}}】:&nbsp;<b>{{ item.text }}</b>
          </a-list-item>
        </a-list>
      </div>
    </div>

    <el-dialog
      title="上传文件"
      :visible.sync="DialogVisible"
      width="35%"
      center
    >
      <el-upload
        class="upload-demo"
        action="http://211.86.56.184:8197/compressedFileUpload"
        :file-list="fileList"
        :headers="headers"
        :on-success="handleUploadSuccess"
      >
        <el-button
          size="small"
          type="primary"
        >点击上传</el-button>
        <div
          slot="tip"
          class="el-upload__tip"
        >只能上传zip文件</div>
      </el-upload>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="DialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="gotoSubmit"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import randomColorRGB from "random-color-rgb";
import { getToken } from "@/utils/auth";
import { getFilesList, getFileDetail, getEntityColors } from '@/api/autoMark';

export default {
  name: "index",
  data () {
    return {
      headers: {
        Authorization: getToken(),
      },
      originText: 'wwwwwwwww',//原始文本
      htmlText: "wwwwwww",// 打标签文本
      tcolor: 'green',
      selection: {
        text: "",
        start: null,
        end: null,
      },
      labelList: [],
      colorList: [],
      fileList: [],
      DialogVisible: false,
      fileUrl: '',
      entityColor: [],//实体-颜色对应关系
    };
  },
  computed: {
    annotation () {
      return !this.selection;
    },
  },
  mounted () {
    this.getEColor();
  },
  methods: {
    gotoPath (path) { // 跳转至首页
      this.$router.push(path);
    },
    getEColor () { //获取entity - color
      getEntityColors().then(res => {
        this.entityColor = res.data;
      })
    },
    getSelection (visible) {
      if (visible) {
        this.selection["text"] = window.getSelection().toString();
      }
    },
    openFile (item) {
      console.log(`打开文件${item}`);
      getFileDetail(item).then(res => {
        if (res.code == 200) {
          console.log('打开文件', res);
          this.originText = res.data.merged_html_text;
          this.htmlText = res.data.merged_html_text;
        }
      })
    },
    annotationLabel (c, n) {
      const color = c;
      const text = this.selection.text;
      const type = n;
      console.log('选中文本', text)
      this.labelList.push({
        text,
        type,
        color,
      });
      this.paintLabelColor();
    },
    deleteItem (index) {
      this.labelList.splice(index, 1);
      this.paintLabelColor();
    },
    generateRandomColor () {
      let color;
      do {
        color = randomColorRGB();
      } while (this.colorList.includes(color));
      this.colorList.push(color);
      return color;
    },
    paintLabelColor () {
      this.htmlText = this.labelList.reduce((pre, cur) => {
        let result = pre.split(cur["text"]);
        return result.join(
          `<span style="background-color: ${cur.color}; color: white">${cur.text}</span>`
        );
      }, this.originText);
    },
    // 上传成功回调
    handleUploadSuccess (res) {
      console.log('上传成功回调', res);
      if (res.code == 200) {
        this.fileUrl = res.data;
        console.log(this.fileUrl)
      }
    },
    gotoSubmit () {
      getFilesList(this.fileUrl).then(res => {
        console.log('获取上传文件列表', res);
        if (res.code == 200) {
          this.fileList = res.data.current_files;
        }

      })
      this.DialogVisible = false;
    }
  },
};
</script>

<style scoped>
.auto-mark {
  height: calc(100vh - 70px);
  display: flex;
}

.top-bar {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
}

.left {
  flex: 1;
  padding: 30px;
  background-color: #f3f5f7;
}

.left p {
  text-indent: 28px;
}

.right {
  width: 300px;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  border: 1px solid rgb(235, 235, 235);
}

.logo-image {
  height: 70px;
  padding: 0 20px;
  object-fit: contain;
}

.logo-left {
  width: 340px;
  height: 100%;
}

.title {
  flex: 1;
  font-size: 18px;
}
.listItem {
  cursor: pointer;
}
.listItem:hover {
  font-weight: 800;
  color: #448ef7;
}
.op-col {
  display: flex;
}
.op-col h3,
.op-col a-button {
  flex: 1;
}
.menuHover {
  height: 350px;
  overflow: auto;
}
</style>