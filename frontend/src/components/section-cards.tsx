import { MetricCard } from "./metric-card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-5">
        <MetricCard 
          title="Today's Revenue" 
          value="LKR 1,250.00" 
          description="Today's Revenue"
        />
        <MetricCard 
          title="Most Ordered Main Dish" 
          value="Rice" 
          description="Most Ordered Main Dish"
        />
        <MetricCard 
          title="Most Ordered Side Dish" 
          value="Wadai" 
          description="Most Ordered Side Dish"
        />
        <MetricCard 
          title="Most Ordered Dessert Dish" 
          value="Pudding" 
          description="Most Ordered Dessert"
        />
        <MetricCard 
          title="Most Ordered Dessert Dish" 
          value="Pudding" 
          description="Most Ordered Dessert"
        />
    </div>
  )
}
