
const resumeDownload = async (event) => {
  event.preventDefault();
  console.log('Resume JS Inside Download Resume');

  const resume = document.querySelector('.resume').textContent;
  const response = await fetch('/api/users/download', {
    method: 'POST',
    body: JSON.stringify({ resume }),
    headers: { 'Content-Type': 'application/json' },
  });
    
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Resume could not be downloaded, please try later');
  }

}

document.querySelector('#download').addEventListener('click', resumeDownload);