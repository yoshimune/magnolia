document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('https://d1pl9aveq3dpov.cloudfront.net/2025-02-23_%E3%82%AD%E3%83%A5%E3%82%A2%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB_%E8%83%8C%E6%99%AF_sign.png');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'background_image.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    });
});