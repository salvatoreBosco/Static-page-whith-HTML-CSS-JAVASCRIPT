export default function observeFunction(watch, inPage, threshold) {
    //elements
    var elements_to_watch = document.querySelectorAll(watch)

    //callback
    var callback = function (items) {
        items.forEach((item) => {
            if (item.isIntersecting) {
                item.target.classList.add(inPage)
            } else {
                item.target.classList.remove(inPage)
            }
        });
    }

    //observe
    var observe = new IntersectionObserver(callback, { threshold: threshold });

    //apply
    elements_to_watch.forEach((element) => {
        observe.observe(element);
    })
}