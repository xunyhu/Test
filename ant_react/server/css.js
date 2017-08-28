require('babel-register');
// require('./server.js');

import fs from 'fs'
import readline from 'readline'
import path from 'path'
const rootDir = path.join(__dirname,'..')
const rootClientDir = path.join(__dirname,'..','client')
const cssSrcDir = path.join(__dirname,'..','src/css')
const allCss = path.join(__dirname,'..','src/css/all.css')
const allCssJs = path.join(rootClientDir,'allCss.js')
const mark = process.platform === 'win32' ? '\\' : '/'
const params = process.argv[2]

const importPath = ()=>{
  let rootLen = rootClientDir.split(mark).length
  let parent=['.']
  for(let i=0;i<(rootLen-rootLen);i++){
    parent.push('..')
  }
  return {rootLen,parent}
}
// 找.css文件
const readFileByDir = dir=>{
  fs.readdir(dir,(err,dirs)=>{
    let list = dirs.reduce((arr,subDir)=>{
      let newSubDir = path.join(dir,subDir)
      // 排队bepartner文件夹
      if(subDir!=='bepartner'&&fs.statSync(newSubDir).isDirectory()){
        readFileByDir(newSubDir)
      }else if(subDir.indexOf('.css')>-1){
        readCssFile(newSubDir)
      }
    },[])
  })
}
const readJsFileByDir = dir =>{
  fs.readdir(dir,(err,dirs)=>{
    let list = dirs.reduce((arr,subDir)=>{
      let newSubDir = path.join(dir,subDir)
      // 排队bepartner文件夹
      if(subDir!=='bepartner'&&subDir!=='register'&&subDir!=='utils'&&fs.statSync(newSubDir).isDirectory()){
        readJsFileByDir(newSubDir)
      }else if(subDir.indexOf('.js')>-1&&subDir!='allCss.js'){
        readJsFile(newSubDir)
      }
    },[])
  })
}
const readCssFile = css=>{
  let {rootLen,parent} = importPath()
  let cssList = css.split(mark)
  let cssLen = cssList.length
  for(let i=rootLen;i<cssLen;i++){
    parent.push(cssList[i])
  }
  let _path = `\nimport "${parent.join('/')}"`
  fs.appendFileSync(allCssJs,_path,'utf8')
}
// 清除文件内的.css文件
const readJsFile = js=>{
  const rl = readline.createInterface({
    input: fs.createReadStream(js)
  })
  let context = ''
  let utilsCon = []
  let hasCss = false
  let hasUtils = false
  let hasImportUtils = false
  if(params=='utils') utilsCon.push(getUtilsPath(js))
  rl.on('line', (line) => {
    if(line.indexOf('./index.css')==-1&&line.indexOf('./coms.css')==-1&&params=='js'){
      context += `${line}\n`
    }else if(params=='js'){
      hasCss = true
    }else if(params=='utils'){
      utilsCon.push(line)
      if(line.indexOf('import')>-1&&line.indexOf('/utils')>-1) hasImportUtils = true
      if(line.indexOf('utils.')>-1&&!hasImportUtils)hasUtils = true
    }
  })
  rl.on('close',()=>{
    if(hasCss&&params=='js'){
      fs.writeFile(js,context,(err)=>{
        console.log(js,err)
      })
    }else if(params == 'utils'&&hasUtils){
      // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
      // console.log(js)
      fs.writeFile(js,utilsCon.join('\n'),(err)=>{
        console.log(js,err)
      })
    }
  })
}
const deleteCssFile = ()=>{
  fs.unlink(allCssJs)
}

const getUtilsPath = js=>{
  let utilsFile = (path.join(rootClientDir,'utils')).split(mark)
  let client = rootClientDir.split(mark)
  let clientLength = client.length
  var dir = js.split(mark)
  let newPath = ['.']
  for(let i=clientLength;i<dir.length;i++){
    if((dir[i]).indexOf('.js')==-1)newPath.push('..')
  }

  for(let j=clientLength;j<utilsFile.length;j++){
    newPath.push(utilsFile[j])
  }
  return `import utils from '${newPath.join('/')}'` 
}

switch(params){
  case 'delete':
    deleteCssFile()
    break;
  case 'file':
    fs.writeFileSync(allCssJs,'/*\ncreate by nodejs\n*/','utf8')
    readFileByDir(rootClientDir)
    break;
  case 'js':
    var dir = path.join(rootClientDir)
    readJsFileByDir(dir)
    break;
  case 'utils':
    var dir = path.join(rootClientDir)
    readJsFileByDir(dir)
    
    break;
}






