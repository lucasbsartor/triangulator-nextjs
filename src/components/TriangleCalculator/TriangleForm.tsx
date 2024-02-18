import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
  Triangle,
  getTriangleAngles,
  getTriangleType,
  isValidTriangle,
} from '@/lib/triangle'
import { useAtom } from 'jotai'
import { triangleAtom, triangleListAtom } from '@/store/atoms'
import { nanoid } from 'nanoid'
import { toast } from 'sonner'

const triangleFormSchema = z.object({
  sideA: z.coerce.number().int().positive(),
  sideB: z.coerce.number().int().positive(),
  sideC: z.coerce.number().int().positive(),
})

const TriangleForm = () => {
  const [triangle, setTriangle] = useAtom(triangleAtom)
  const [triangleList, setTriangleList] = useAtom(triangleListAtom)

  const triangleForm = useForm<z.infer<typeof triangleFormSchema>>({
    resolver: zodResolver(triangleFormSchema),
    defaultValues: {
      sideA: 0,
      sideB: 0,
      sideC: 0,
    },
  })
  const onSubmit = (values: z.infer<typeof triangleFormSchema>) => {
    const { sideA, sideB, sideC } = values

    if (isValidTriangle(sideA, sideB, sideC)) {
      return toast.error('Oops looks like that is not a valid triangle 🤯')
    }

    const triangle: Triangle = {
      id: nanoid(),
      type: getTriangleType(sideA, sideB, sideC),
      angles: getTriangleAngles(sideA, sideB, sideC),
      vertices: [sideA, sideB, sideC],
    }

    setTriangle(triangle)
    setTriangleList((triangles) => [...triangles, triangle])
  }

  return (
    <Form {...triangleForm}>
      <form
        onSubmit={triangleForm.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormField
          control={triangleForm.control}
          name="sideA"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Side A</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={triangleForm.control}
          name="sideB"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Side B</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={triangleForm.control}
          name="sideC"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Side C</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Calculate
        </Button>
      </form>
      <Button className="w-full mt-4" onClick={() => triangleForm.reset()}>
        Clear
      </Button>
    </Form>
  )
}

export default TriangleForm
