import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface MetricCardProps {
  title: string
  value: string | number
  description?: string
}

export function MetricCard({ title, value, description }: MetricCardProps) {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{description || title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {value}
        </CardTitle>
      </CardHeader>
    </Card>
  )
}