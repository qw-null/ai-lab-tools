import request from "@/utils/request";

export function getFilesList (path) { // 获取上传文件的所有内容
  return request({
    url: '/findFilesByPath?path=' + path,
    method: 'post'
  })
}

export function getFileDetail (path) { // 获取上传文件的所有内容
  return request({
    url: '/readFileContent?path=' + path,
    method: 'post'
  })
}

export function getEntityColors () { // 获取实例对应的颜色值
  return request({
    url: '/entityColors',
    method: 'post'
  })
}

