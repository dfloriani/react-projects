export async function login(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail)
    };

    try {
        const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);
        
        if (!response.ok) {
            const errorDetails = await response.text();
            let message = { message: response.statusText, status: response.status, details: errorDetails };
            console.error('Login failed:', message);
            throw message;
        }

        const data = await response.json();

        if (data.accessToken) {
            sessionStorage.setItem("token", JSON.stringify(data.accessToken));
            sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
        }

        return data;
    } catch (error) {
        console.error('An error occurred during login:', error);
        throw error;
    }
}

export async function register(authDetail){
    const requestOptions = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
      }
  
      const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);
      if(!response.ok){
        let message = { message: response.statusText, status: response.status }
        throw message;
    }
      const data = await response.json();
        
      if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
      }

      return data;
}

export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}