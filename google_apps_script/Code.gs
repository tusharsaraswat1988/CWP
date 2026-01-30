function onEdit(e) {
  const sheetName = e.source.getActiveSheet().getName();
  const range = e.range;
  const headerRows = 1;

  if (sheetName === 'Customers' && range.getColumn() === 1 && range.getRow() > headerRows && !range.getValue()) {
    range.setValue(generateUniqueId('CUS-', 4));
    const createdAtCell = e.source.getActiveSheet().getRange(range.getRow(), 9);
    createdAtCell.setValue(new Date());
    const updatedAtCell = e.source.getActiveSheet().getRange(range.getRow(), 10);
    updatedAtCell.setValue(new Date());
  }

  if (sheetName === 'Vehicles' && range.getColumn() === 1 && range.getRow() > headerRows && !range.getValue()) {
    range.setValue(generateUniqueId('VEH-', 5));
    const createdAtCell = e.source.getActiveSheet().getRange(range.getRow(), 7);
    createdAtCell.setValue(new Date());
    const updatedAtCell = e.source.getActiveSheet().getRange(range.getRow(), 8);
    updatedAtCell.setValue(new Date());
  }

  if (sheetName === 'Plans' && range.getColumn() === 1 && range.getRow() > headerRows && !range.getValue()) {
    range.setValue(generateUniqueId('PLAN-', 3));
    const notesCell = e.source.getActiveSheet().getRange(range.getRow(), 12);
    notesCell.setValue('Auto-generated. Add notes if needed.');
  }

  if (sheetName === 'Service_Log' && range.getColumn() === 1 && range.getRow() > headerRows && !range.getValue()) {
    range.setValue(generateUniqueId('SRV-', 7));
    const createdAtCell = e.source.getActiveSheet().getRange(range.getRow(), 15);
    createdAtCell.setValue(new Date());
  }

  if (sheetName === 'Payments' && range.getColumn() === 1 && range.getRow() > headerRows && !range.getValue()) {
    range.setValue(generateUniqueId('PAY-', 8));
  }

  ['AttendID', 'PetrolID', 'LeadID'].forEach(function(columnID) {
    if(sheetName === 'Attendance') { console.log('CS
}
}