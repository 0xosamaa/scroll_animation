const boxes = document.querySelectorAll('.box')

checkBoxes()
window.addEventListener('scroll', checkBoxes)

function checkBoxes() {

    let height = window.innerHeight * 9 / 10
    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top
        if (boxTop < height) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
        })
    }
