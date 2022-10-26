window.dom = {
    //增
    create (string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim(); //去掉字符串两边的空格
        return container.content.firstChild;
    },
    after (node, insertNode) {
        node.parentNode.insertBefore(insertNode, node.nextSibling);
    },
    before (node, insertNode) {
        node.parentNode.insertBefore(insertNode, node);
    },
    append (parent, child) {
        parent.appendChild(child);
    },
    wrap (node, parent) {
        dom.before(node, parent);
        dom.append(parent, node);
    },
    //删
    remove (node) {
        node.parentNode.removeChild(node);
        return node;
    },
    empty (node) {
        const { childNodes  } = node // const childNodes = node.chilidNodes
        ;
        const array = [];
        let x = node.firstChild;
        while(x){
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
    },
    //改
    attr (node, attributeName, attributeValue) {
        if (arguments.length === 3) node.setAttribute(attributeName, attributeValue);
        else if (arguments.length === 2) return node.getAttribute(attributeName);
    },
    text (node, string) {
        if (arguments.length === 2) {
            if ("innerText" in node) node.innerText = string;
            else node.textContent = string;
        } else if (arguments.length === 1) {
            if ("innerText" in node) return node.innerText;
            else return node.textContent;
        }
    },
    html (node, string) {
        if (arguments.length === 2) node.innerHTML = string;
        else if (arguments.length === 1) return node.innerHTML;
    },
    style (node, name, value) {
        //dom.style(div,'color','red')
        if (arguments.length === 3) node.style[name] = value;
        else if (arguments.length === 2) {
            // dom.style(div,'color')
            if (typeof name === "string") return node.style[name];
            else if (name instanceof Object) {
                const object = name;
                for(let key in object)//key:border / color
                //node.style.border = ....
                //但此处为变量，用变量不能直接点
                node.style[key] = object[key];
            }
        }
    },
    class: {
        add (node, className) {
            node.classList.add(className);
        },
        remove (node, className) {
            node.classList.remove(className);
        },
        has (node, className) {
            return node.classList.contains(className);
        }
    },
    on (node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    off (node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    //查
    find (selector, scope) {
        return (scope || document).querySelectorAll(selector);
    },
    parent (node) {
        return node.parentNode;
    },
    children (node) {
        return node.children;
    },
    siblings (node) {
        return Array.from(node.parentNode.children).filter((n)=>n !== node);
    },
    next (node) {
        let x = node.nextSibling;
        while(x.nodeType === 3)x.x.nextSibling;
        return x;
    },
    previous (node) {
        let x = node.previousSibling;
        while(x.nodeType === 3)x.x.previousSibling;
        return x;
    },
    each (nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++)fn.call(null, nodeList[i]);
    },
    index (node) {
        const list = dom.children(node.parentNode);
        let i;
        for(i = 0; i < list.length; i++){
            if (list[i] === node) break;
        }
        return i;
    }
};

//# sourceMappingURL=index.755bdb92.js.map
