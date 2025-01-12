const SUPABASE_URL = 'https://nggucsasyksohvjnjzru.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nZ3Vjc2FzeWtzb2h2am5qenJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2ODU5NzYsImV4cCI6MjA1MjI2MTk3Nn0.AaogHxq1WAJPHyrn8t4fZ9I_VjXchAAUP5bQVEqwcSI'; // Replace with your Supabase anon key
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = ''; // Clear previous messages
    messageDiv.className = 'message';

    const formData = {
        fullname: document.getElementById('fullname').value,
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
            .from('your_table_name') // Replace with your table name
            .insert([formData]);

        if (error) {
            console.error('Error:', error.message);
            messageDiv.textContent = 'Error: ' + error.message;
            messageDiv.classList.add('error');
        } else {
            messageDiv.textContent = 'Data submitted successfully!';
            messageDiv.classList.add('success');
            document.getElementById('dataForm').reset();
        }
    } catch (err) {
        console.error('Unexpected error:', err);
        messageDiv.textContent = 'Unexpected error occurred!';
        messageDiv.classList.add('error');
    }
});