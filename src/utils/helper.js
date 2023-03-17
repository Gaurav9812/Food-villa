export function filterData(searchInput, restaurents) {
    return restaurents.filter((restaurent) =>{
    return restaurent?.data?.name?.toLowerCase().includes(searchInput.toLowerCase());
      }  );
  }