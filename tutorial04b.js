handleExportLogs() { 
        fetch('api/exportlogs')
            .then(response => response.text())
            .then(data => {
                var d = new Date();
                var fileName = 'Logs_' + d.toLocaleDateString() + '_' + d.toLocaleTimeString() + '.csv';
                fileName = fileName.replace(/ /g, '');
                var blob = new Blob([data], {
                    type: "text/csv; encoding=UTF-8"
                });
                saveAs(blob, fileName);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
