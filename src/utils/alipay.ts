/**
 * 支付宝移动端唤起 APP 工具。
 * 供 usePayment / useRechargeOrderDetail 共用，避免重复实现。
 */

/** 判断是否为支付宝渠道 */
export function isAlipayChannelType(channelType: unknown): boolean {
  return String(channelType || '').toLowerCase() === 'alipay'
}

/** 判断当前视口是否为移动端（< 768px） */
export function isMobileViewport(): boolean {
  return typeof window !== 'undefined' && window.innerWidth < 768
}

/**
 * 用支付宝官方 scheme 唤起 APP（appId=20000067 是支付宝内置 H5 容器）。
 * 3 秒内 APP 未唤起（页面仍可见），降级直接跳转支付链接。
 *
 * @param url 支付二维码内容或支付链接
 */
export function openAlipayApp(url: string): void {
  const target = String(url || '').trim()
  if (!target) return
  const scheme = `alipays://platformapi/startapp?appId=20000067&url=${encodeURIComponent(target)}`
  const timer = window.setTimeout(() => {
    if (!document.hidden) window.location.href = target
  }, 3000)
  document.addEventListener(
    'visibilitychange',
    () => {
      if (document.hidden) window.clearTimeout(timer)
    },
    { once: true },
  )
  window.location.href = scheme
}
