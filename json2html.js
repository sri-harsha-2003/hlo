export default function json2html(data) {
    // Extract the unique headers from the data array of objects
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Start the HTML table with a user data attribute
    let html = '<table data-user="harshagoruganti@gmail.com">';
  
    // Create the table header
    html += "<thead><tr>";
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += "</tr></thead>";
  
    // Create the table body with rows for each object
    html += "<tbody>";
    data.forEach(row => {
      html += "<tr>";
      headers.forEach(header => {
        html += `<td>${row[header] || ""}</td>`; // Leave cell blank if property is missing
      });
      html += "</tr>";
    });
    html += "</tbody></table>";
  
    return html; // Return the table as an HTML string
  }
  