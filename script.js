// Import the createClient method from the Supabase library //
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://nggucsasyksohvjnjzru.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nZ3Vjc2FzeWtzb2h2am5qenJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2ODU5NzYsImV4cCI6MjA1MjI2MTk3Nn0.AaogHxq1WAJPHyrn8t4fZ9I_VjXchAAUP5bQVEqwcSI'; // Replace with your Supabase anon key
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = ''; // Clear previous messages
    messageDiv.className = 'message';

    const formData = {
        fullname: document.getElementById('full_name').value,
        serial_number: document.getElementById('serial_number').value,
        card_number: document.getElementById('card_number').value,
        title: document.getElementById('title').value,
        date_of_birth: document.getElementById('date_of_birth').value,
        place_of_birth: document.getElementById('place_of_birth').value,
        residential_address: document.getElementById('residential_address').value,
        cell_phone: document.getElementById('cell_phone').value,
        email: document.getElementById('email').value,
        photo_url: document.getElementById('photo_url').value,
    };

    try {
        const { data, error } = await supabase
            .from('DCWC_Data_New') // Replace with your table name
            .insert([formData]);

        if (error) {
            handleError(error);
        } else {
            messageDiv.textContent = 'Data submitted successfully!';
            messageDiv.classList.add('success');
            document.getElementById('dataForm').reset(); // Reset the form
        }
    } catch (err) {
        console.error('Unexpected error:', err);
        messageDiv.textContent = 'Unexpected error occurred! Please try again later.';
        messageDiv.classList.add('error');
    }
});

// Function to handle and display errors
function handleError(error) {
    console.error('Error:', error.message);

    let errorMessage;

    if (error.code === '23505') { // Unique violation (e.g., duplicate entry)
        errorMessage = 'This entry already exists. Please check your data.';
    } else if (error.code === '22P02') { // Invalid input syntax
        errorMessage = 'There was an issue with the input data. Please check your entries.';
    } else {
        errorMessage = 'An error occurred: ' + error.message;
    }

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = errorMessage; // Display the specific error message
    messageDiv.classList.add('error');
}
