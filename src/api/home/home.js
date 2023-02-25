import request from '@/utils/request'
const homeApi = {
  Contact: '/home/contact',
  UserMenu: '/user/nav'
}

export function contact (parameter) {
  console.log(parameter)
  return request({
    url: homeApi.Contact,
    method: 'post',
    data: parameter
  })
}
