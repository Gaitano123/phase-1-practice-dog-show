document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/dogs')
    .then(response => response.json())
    .then(dogs => {
        dogs.forEach(dog => display(dog))
    });

    function display(dog) {
        const data = document.createElement('tr');
        data.innerHTML = `
        <td class="dog-name">${dog.name}</td>
        <td class="dog-breed">${dog.breed}</td>
        <td class="dog-sex">${dog.sex}</td>
        <td><button>Edit Dog</button></td>
        `
        document.getElementById('table-body').appendChild(data);
        // document.getElementsByTagName('botton').addEventListener('click', () => {
        //     editData();
        // })
    }

    function editData() {
        fetch('http://localhost:3000/dogs/:id', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: document.getElementsByClassName('dog-name').value,
                breed: document.getElementsByClassName('dog-breed').value,
                sex: document.getElementsByClassName('dog-sex').value
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    // function editDog(dog) {
    //     const editForm = document.getElementById('edit-dog-form');
      
    //     const nameInput = editForm.querySelector('input[name="name"]');
    //     const breedInput = editForm.querySelector('input[name="breed"]');
    //     const sexInput = editForm.querySelector('input[name="sex"]');
      
    //     nameInput.value = dog.name;
    //     breedInput.value = dog.breed;
    //     sexInput.value = dog.sex;
      
    //     // Store the dog's ID in a data attribute of the form for later use
    //     editForm.dataset.dogId = dog.id;
    //   }

      

    function formEdit(){
        const form = document.createElement('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            editData.push(e.target.value);
        })
    }

    formEdit();
})