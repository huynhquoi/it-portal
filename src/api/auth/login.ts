export async function loginUser(formData: any): Promise<boolean | Error> {
    try {
      const response = await fetch('https://quanlituyendung-be.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Success");
        return true;
      } else {
        const errorData = await response.json();
        return new Error(errorData.message);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }