import type { AxiosResponse } from 'axios'
import axiosInstance from './axiosInstance'
import type { BaseApiResponse, RecordVisitorResponse } from '@/types'

const registerUser = async (
  orgId: string,
  email: string,
  phoneNumber: string,
) => {
  try {
    const response: AxiosResponse<BaseApiResponse> = await axiosInstance.post('/register-user.php', {
      org_id: orgId,
      email,
      phone_number: phoneNumber,
    })
    return response.data
  }
  catch (error) {
    console.error('Error registering user:', error)
    throw error
  }
}

const recordVisitor = async () => {
  try {
    const response: AxiosResponse<RecordVisitorResponse> = await axiosInstance.post('/record-visitor.php', {
      org_id: 'deltasolution',
    })
    return response.data
  }
  catch (error) {
    console.error('Error recording visitor:', error)
    throw error
  }
}

export { registerUser, recordVisitor }
