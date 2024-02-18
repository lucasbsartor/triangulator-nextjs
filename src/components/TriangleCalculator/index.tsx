'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import TriangleResults from '../TriangleResults'
import TriangleForm from './TriangleForm'
import TriangleHistory from '../TriangleHistory'

const TriangleCalculator = () => {
  return (
    <div className="grid w-full gap-4">
      <div className="grid w-full gap-4 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Insert Numbers Here</CardTitle>
          </CardHeader>
          <CardContent>
            <TriangleForm />
          </CardContent>
        </Card>
        <TriangleResults />
      </div>
      <TriangleHistory />
    </div>
  )
}

export default TriangleCalculator
