# Get Data from form

```js
const handleSubmit = (e) => {
  e.preventDefault();
  const form = ["email", "password"];
  let data = {};
  form.forEach((el) => (data[el] = e.target[el].value));
  console.log(data);
  // createUserWithEmailAndPassword(auth, email, password);
};
```
