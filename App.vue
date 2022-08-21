<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
	  font-family: "iconfont"; /* Project id  */
	  src: url('~@/static/font/iconfont.ttf?t=1659262774403') format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-ambitus05:before {
	  content: "\e569";
	}
	
	.icon-ambitus08:before {
	  content: "\e56a";
	}
	
	.icon-format03:before {
	  content: "\e56b";
	}
	
	.icon-shop03:before {
	  content: "\e56e";
	}
	


</style>
