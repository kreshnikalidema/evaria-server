export const projectUpdatedTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        padding: 8px 12px;
        border: 1px solid #ddd;
      }
      th {
        background-color: #f4f4f4;
      }
      h1 {
        color: #4CAF50;
      }
    </style>
  </head>
  <body>
    <h1>Project Variance Details for {{projectName}}</h1>
    <p><strong>PV Number:</strong> {{pvNumber}}</p>
    <p><strong>Project Name:</strong> {{projectName}}</p>
    <p><strong>Client ID:</strong> {{clientId}}</p>
    <p><strong>Currency Code:</strong> {{currencyCode}}</p>
    <p><strong>User Insert:</strong> {{userInsert}}</p>
    <p><strong>Date Inserted:</strong> {{dtInsert}}</p>
    <h2>CO Details</h2>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>KBR Workhours</th>
          <th>KBR Workhours Cost</th>
          <th>Schedule Impact</th>
        </tr>
      </thead>
      <tbody>
        {{#each coDetails}}
        <tr>
          <td>{{categoryId}}</td>
          <td>{{categoryDesc}}</td>
          <td>{{kbrWorkhours}}</td>
          <td>{{kbrWorkhoursCost}} {{kbrWorkhoursCostValueType}}</td>
          <td>{{scheduleImpact}} ({{scheduleImpactValue}} days)</td>
        </tr>
        {{/each}}
      </tbody>
    </table>
    <h2>Attachments</h2>
    <ul>
      {{#each attachments}}
      <li><a href="{{url}}">{{name}}</a> ({{size}} bytes)</li>
      {{/each}}
    </ul>
  </body>
</html>
`;
