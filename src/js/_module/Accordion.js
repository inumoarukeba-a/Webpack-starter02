'use strict'

const accordion = (
  // 初期値
  {
    target = '@accordion',
    summary = '@accordion__summary',
    details = '@accordion__details',
    speed = 1.5,
    cssEase = 'ease-out',
  } = {}
) => {
  const TARGET = document.querySelectorAll(target)
  const TARGET_LENGTH = TARGET.length
  for (let i = 0; i < TARGET_LENGTH; i++) {
    let isShow = false
    const CURRENT_TARGET = TARGET[i]
    const SUMMARY = CURRENT_TARGET.querySelectorAll(summary)[0]
    const DETAILS = CURRENT_TARGET.querySelectorAll(details)[0]
    const MAX_HEIGHT = CONTENT.scrollHeight
    const DURATION = MAX_HEIGHT * speed
    details.style.transitionDuration = `${DURATION}ms`
    details.style.transitionTimingFunction = cssEase
    SUMMARY.addEventListener('click', () => {
      details.style.height = isShow ? 0 : `${MAX_HEIGHT}px`
      isShow = !isShow
    })
  }
}

// 実行
accordion({
  speed: 1, // 1で100px 100msのスピード
  cssEase: 'ease',
})
