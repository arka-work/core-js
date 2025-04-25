function Data(callback) {
    setTimeout(() => {
      callback("Data loaded");
    }, 3000);
  }
  
  Data((result) => {
    console.log(result);
  });

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hello");
      }, 1000);
    });
  };
  
  fetchData().then(data => {
    console.log(data); // "Data loaded"
  });
  
  const wait = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("this is js");
      }, 2000);
    });
  };
  
  async function load() {
    const result = await wait();
    console.log(result); 
  }
  
  load();
  