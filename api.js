const input = document.getElementById('fileinput');
var data = new FormData()
// data.append('file', input.files[0])
data.append('tryalign','false')
data.append('usrimg',input)

const upload = () => {
  fetch('https://api.facemorph.me/api/encodeimage/', { // Your POST endpoint
    method: 'POST',
    headers: {
      // Content-Type may need to be completely *omitted*
      // or you may need something
      "Content-Type": "multipart/form-data"
    },
    body: data // This is your file object
  }).then(
    response => console.log(response.json()) // if the response is a JSON object
  ).then(
    success => console.log(success) // Handle the success response object
  ).catch(
    error => console.log(error) // Handle the error response object
  );
};

// Event handler executed when a file is selected
const onSelectFile = () => upload();



input.addEventListener('change', onSelectFile, false);