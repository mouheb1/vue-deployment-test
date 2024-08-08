import axiosInstance from './axiosInstance'

export const registerUser = async (orgId: string, email: string, phoneNumber: string) => {
  try {
    const response = await axiosInstance.post('/register-user.php', {
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
