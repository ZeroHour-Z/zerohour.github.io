// 这是一个带有region标记的代码片段
export default {
  name: 'ExampleComponent',
  data() {
    return {
      message: 'Hello, Valaxy!'
    }
  }
}

// #region snippet
export function exampleFunction() {
  console.log('This is a snippet region')
  return 'snippet content'
}
// #endregion snippet

export default {
  name: 'AnotherComponent',
  data() {
    return {
      anotherMessage: 'Another example'
    }
  }
} 