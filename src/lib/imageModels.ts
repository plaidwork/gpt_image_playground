import type { ApiProfile } from '../types'

export const DEFAULT_IMAGES_MODEL = 'gpt-image-2.5-sunburst'

export function getImageGenerationModel(profile: ApiProfile) {
  return profile.provider === 'openai' && profile.apiMode === 'responses'
    ? profile.imageGenerationModel?.trim() ?? ''
    : profile.model
}

export function isGptImage25Model(model: string) {
  return model.trim().toLowerCase().includes('gpt-image-2.5')
}
// ==================== 新增：预设模型与特性说明 ====================
export interface ImageModelOption {
  id: string
  name: string
  badge: string
  desc: string
}

export const PRESET_IMAGE_MODELS: ImageModelOption[] = [
  {
    id: 'gpt-image-2',
    name: 'gpt-image-2',
    badge: '基础均衡',
    desc: '经典基准模型，生成速度快、单图耗损低，适合日常通用出图与快速概念起稿。',
  },
  {
    id: 'gpt-image-2.5-flare',
    name: 'gpt-image-2.5-flare',
    badge: '极速光影',
    desc: '轻量优化版，动态光影与色彩张力表现出众，响应延迟低，适合氛围感概念探索。',
  },
  {
    id: 'gpt-image-2.5-sunburst',
    name: 'gpt-image-2.5-sunburst',
    badge: '旗舰高质',
    desc: '旗舰精细模型，对复杂复杂提示词理解更准，微观纹理与材质还原细腻，适合商用与高画质输出。',
  },
]
