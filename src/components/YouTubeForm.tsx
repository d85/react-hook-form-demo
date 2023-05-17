import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

let renderCount = 0

export const YouTubeForm = () => {
  const form = useForm<FormValues>()
  const { register, control, handleSubmit } = form

  type FormValues = {
    username: string
    email: string
    channel: string
  }

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted', data)
  }

  renderCount++
  return (
    <div>
      <h1>YouTube Form ({renderCount/2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {
          ...register("username", {
          required: "Username is required",
        })} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel", {
          required: "Channel is required"
        })} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}
