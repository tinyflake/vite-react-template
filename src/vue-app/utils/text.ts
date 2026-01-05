/**
 * 限制文本长度的工具函数
 */

/**
 * 限制描述文本的长度（按句子数量）
 * @param text 原始文本
 * @param maxSentences 最大句子数量
 * @returns 限制后的文本
 */
export function limitDescriptionLength(text: string, maxSentences: number = 3): string {
  if (!text) return ''
  
  // 按句号、问号、感叹号分割句子
  const sentences = text.split(/[。！？.!?]+/).filter(sentence => sentence.trim())
  
  if (sentences.length <= maxSentences) {
    return text
  }
  
  // 取前 maxSentences 个句子并重新组合
  const limitedSentences = sentences.slice(0, maxSentences)
  return limitedSentences.join('。') + '。'
}

/**
 * 限制文本长度（按字符数量）
 * @param text 原始文本
 * @param maxLength 最大字符数
 * @param suffix 超出时的后缀
 * @returns 限制后的文本
 */
export function limitTextLength(text: string, maxLength: number, suffix: string = '...'): string {
  if (!text || text.length <= maxLength) return text
  
  return text.slice(0, maxLength - suffix.length) + suffix
}
