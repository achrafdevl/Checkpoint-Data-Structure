// Function to calculate the dot product of two vectors
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  
  // Function to check if two vectors are orthogonal
  function are_vectors_orthogonal(v1, v2) {
    const ps = dot_product(v1, v2);
    if (ps === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  const vector1 = [3, 1, 7, 9];
  const vector2 = [2, 4, 1, 9];
  
  if (are_vectors_orthogonal(vector1, vector2)) {
    console.log("Vectors are orthogonal.");
  } else {
    console.log("Vectors are not orthogonal.");
  }
  