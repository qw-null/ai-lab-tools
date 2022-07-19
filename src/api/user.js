import request from "@/utils/request";

export function userLogin (phone, code) { //手机验证码复核登录
  return request({
    url: "/randomCodeVerify?telephone=" + phone + "&randomCode=" + code,
    method: "post"
  });
}

export function getSmsCode (data) { //手机验证码发送
  return request({
    url: "/randomCodeLogin?telephone=" + data,
    method: "post"
  });
}

export function getInfo (data) { // 验证token是否过期
  return request({
    url: '/tokenVerify?token=' + data,
    method: 'post'
  })
}
