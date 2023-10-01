document.addEventListener('DOMContentLoaded', function () {
  var categoryItems = document.querySelectorAll('.category-item')
  var listContent = document.querySelector('.list-content')

  categoryItems.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      listContent.style.display = 'block'
    })

    item.addEventListener('mouseout', function () {
      listContent.style.display = 'none'
    })
  })
})
