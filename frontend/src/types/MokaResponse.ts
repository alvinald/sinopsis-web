export interface Image {
  url: string
  id: number
  height: number
  width: number
}

export interface Category {
  id: number
  name: string
  description: string | null
  business_id: number
  is_deleted: boolean
  created_at: string
  updated_at: string
  outlet_id: number
  guid: string
  uniq_id: string | null
  synchronized_at: string
}

export interface SalesTypeItem {
  is_default?: boolean
  sales_type_id: number
  sales_type_name: string
  sales_type_price: number
}

export interface ItemVariant {
  id: number
  name: string
  sku: string
  price: number
  in_stock: number
  stock_alert: number
  position: number
  item_id: number
  is_deleted: boolean
  created_at: string
  updated_at: string
  add_inventory: number
  track_stock: boolean
  alert: boolean
  cogs: number
  synchronized_at: string
  last_modified: string | null
  outlet_id: number
  guid: string | null
  uniq_id: string | null
  track_cogs: boolean
  is_saved: boolean
  sales_type_items: SalesTypeItem[]
}

export interface ModifierOption {
  id: number
  modifier_id: number
  name: string
  price: number
  created_at: string
  updated_at: string
  outlet_id: number
  synchronized_at: string
  cogs: number | null
  guid: string | null
  is_deleted: boolean
  uniq_id: string | null
}

export interface ActiveModifier {
  id: number
  business_id: number
  name: string
  created_at: string
  updated_at: string
  outlet_id: number
  guid: string
  synchronized_at: string
  modifier_options: ModifierOption[]
  is_deleted: boolean
  uniq_id: string | null
}

export interface ItemImage {
  raw_image_id: number
  raw_image_url: string
}

export interface Item {
  id: number
  name: string
  description: string
  image: Image
  business_id: number
  category_id: number
  is_deleted: boolean
  is_recipe: boolean
  is_sales_type_price: boolean
  created_at: string
  updated_at: string
  background_color: string
  alert: boolean
  outlet_id: number
  guid: string
  uniq_id: string | null
  synchronized_at: string
  category: Category
  item_variants: ItemVariant[]
  active_modifiers: ActiveModifier[]
  is_ecommerce: boolean
  brand_id: number
  principal_id: number
  principal_name: string
  condition: string
  weight: number
  height: number
  width: number
  length: number
  pre_order_days: number
  images: ItemImage[]
}

export interface ItemsData {
  total_pages: number
  total_count: number
  items: Item[]
}

export interface ItemsResponse {
  data: ItemsData
  meta: {
    code: number
    errors: Record<string, unknown>
  }
}