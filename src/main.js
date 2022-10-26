const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.before(test, div)
dom.remove(div)

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'Hi, I am Frank')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

dom.text(test, '你好，这是新的内容')
dom.text(test)

dom.style(test, { border: '1px solid red', color: 'blue' })
console.log(dom.style(test, 'border'))

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'red')
console.log(dom.class.has(test, 'blue'))

const fn = () => {
    console.log('click')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)