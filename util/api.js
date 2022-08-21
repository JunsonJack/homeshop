//请求封装  便于拦截处理  便于域名的更换 便于维护
const BASE_URL ='http://192.168.43.99:8088'
export const myRequest = (options)=>{
	return new Promise((resolve,reject) =>{
		uni.request({
			url:BASE_URL+options.url,
			method: options.method || 'GET',
			data: options.data || {},
			hideLoading: options.hideLoading || false,
			header: {
				"content-type":"application/json",
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			success:(res)=>{		
				if(res.data.code !== 200){
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				//请求成功
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '获取数据失败'
				})
				reject(err)
			}
	})	
	})
}

