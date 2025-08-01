// @author: shubhampatel3355
// Created: 2025-07-24 07:35:24 UTC

const { createClient } = supabase;
const supabaseClient = createClient('https://lnomiodycckfgqgawipq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxub21pb2R5Y2NrZmdxZ2F3aXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0NzAyNzksImV4cCI6MjA2ODA0NjI3OX0.aE48nMBamaAwX00omUrGrzBAlPLY2UVBwZkJTDZ27oM');

function generateOrderId() {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    return `LAW-${randomNumber}`;
}

function setupFormHandler() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formInputs = form.querySelectorAll('input, select, textarea');
        let submission = {};

        formInputs.forEach(element => {
            const { value, name } = element;
            if (value) {
                submission[name] = value;
            }
        });

        // Add the order_id before sending to Supabase
        submission.order_id = generateOrderId();

        try {
            const { error } = await supabaseClient
                .from('entries')
                .insert([submission], { returning: 'minimal' });

            if (error) {
                console.error('Supabase error:', error);
                alert('There was an error, please try again');
            } else {
                alert(`Thanks for contacting us. Your Order ID is ${submission.order_id}`);
                formInputs.forEach(element => element.value = '');
            }
        } catch (err) {
            console.error('Form submission error:', err);
            alert('There was an error, please try again');
        }
    });
}

// Export the setup function
window.setupFormHandler = setupFormHandler;