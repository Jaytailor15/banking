import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './form'
import { Input } from './input'

import { Control, FieldPath} from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
import { text } from 'stream/consumers'

const formScheme = authFormSchema('sign-up');

interface CustomInput{
  control: Control<z.infer<typeof formScheme>>,
  name: FieldPath<z.infer<typeof formScheme>>,
  label: string,
  placeholder:string
}
const CustomInput = ({control, name, label, placeholder}: CustomInput) => {
  return (
        <FormField
              control={control}
              name={name}
              render={({ field }) => (
                <div className='form-item'>
                  <FormLabel className='form-label'>
                    {label}
                  </FormLabel>
                  <div className='flex w-full flex-col'>
                    <FormControl>
                      <Input
                      placeholder={placeholder}
                      className='input-class'
                      type={name === 'password' ? 'password' : 'text'}
                      {...field}
                      />
                    </FormControl>
                    <FormMessage className='form-message mt-2'/>
                  </div>
                </div>
             
              )}
            />
  )
}

export default CustomInput
