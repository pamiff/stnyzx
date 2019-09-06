
class WxWebsocket {
	static CONNECTING = 0
	static OPEN = 1
	static CLOSING = 2
	static CLOSED = 3
	constructor(url, protocols) {
		this.readyState = WxWebsocket.CLOSED
		this.onclose = (event) => {}
		this.onerror = (event) => {}
		this.onmessage = (event) => {}
		this.onopen = () => {}
		
		this.websocket = uni.connectSocket({
			url: url,
			protocols: [protocols],
			success: () => { 
				console.log("connecting")
				this.readyState = WxWebsocket.CONNECTING },
			fail: () => { 
				console.log("fail")
				this.readyState = WxWebsocket.CLOSED }
		})	
		this.websocket.onClose(() => {
			console.log("close")
			this.readyState = WxWebsocket.CLOSED
			this.onclose()
		})
		this.websocket.onError((d) => {
			console.log(d)
			this.readyState = WxWebsocket.CLOSED
			this.onerror(d)
		})
		this.websocket.onMessage((d) => {
			console.log(d)
			this.onmessage(d)
		})
		this.websocket.onOpen((d) => {
			this.readyState = WxWebsocket.OPEN
			this.onopen()
		})
	}
	close(code, reason) {
		if (this.readyState == WxWebsocket.CLOSED) {
			return
		}
		this.readyState = WxWebsocket.CLOSING
		this.socket.close({
			code: code,
			reson: reason,
		})
	}
	send(data) {
		
		console.log(data)
		this.websocket.send({
			data: data,
		})
	}
	// get readyState(){
	// 	return this.readyState
	// }
	// set readyState(state) {
	// 	this.readyState = state
	// }
	
}

module.exports = {
	WxWebsocket
}