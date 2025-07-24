   const { createClient } = supabase
   supabase = createClient('https://lnomiodycckfgqgawipq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxub21pb2R5Y2NrZmdxZ2F3aXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0NzAyNzksImV4cCI6MjA2ODA0NjI3OX0.aE48nMBamaAwX00omUrGrzBAlPLY2UVBwZkJTDZ27oM')

   // Function to generate order ID like LAW-12345
   function generateOrderId() {
      const randomNumber = Math.floor(10000 + Math.random() * 90000) // Ensures 5 digits
      return `LAW-${randomNumber}`
   }

   const form = document.querySelector('#contact-form')
   form.addEventListener('submit', async (event) => {
      event.preventDefault()

      const formInputs = form.querySelectorAll('input, select, textarea')
      let submision = {}

      formInputs.forEach(element => {
         const { value, name } = element
         if (value) {
            submision[name] = value
         }
      })

      // Add the order_id before sending to Supabase
      submision.order_id = generateOrderId()

      const { error } = await supabase
         .from('entries')
         .insert([submision], { returning: 'minimal' })

      if (error) {
         alert('There was an error, please try again')
      } else {
         alert(`Thanks for contacting us. Your Order ID is ${submision.order_id}`)
      }

      formInputs.forEach(element => element.value = '')
   })