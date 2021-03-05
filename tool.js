/**
 * blob：接口请求回来的blob数据 （http请求需要定义responseType: 'blob'）
 * originFileName：下载文件的重新命名
 * 
 * 说明：请求文件资源，并模拟a标签进行下载并命名
 */
function downLoadFile(blob, originFileName)  {
    let url = window.URL.createObjectURL(blob);
    console.log(url);
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.href = url;
    a.download = originFileName;
    a.click();
    window.URL.revokeObjectURL(url);
}