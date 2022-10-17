# Instalación y ejecución del proyecto
## Programas necesarios
  [1.Instalar XAMP](https://downloadsapachefriends.global.ssl.fastly.net/8.1.10/xampp-windows-x64-8.1.10-0-VS16-installer.exe?from_af=true)
  
  [2.Descargar API](https://monlaues-my.sharepoint.com/:u:/g/personal/raulmenmat_monlau_com/EWqRjukdQIZDnjBIqOkFqeYBvE20obmR5A93XrY6fhk1ig?e=IzZ3RE)
  
  [3.Descargar SQL](https://monlaues-my.sharepoint.com/:u:/g/personal/raulmenmat_monlau_com/EQ_jIZgR4ddMtLf8dFZpgk4Bi-ssxuxFG7inlHXfHCkPdg?e=TerdrN)
  
  [4.Node.js](https://nodejs.org/es/)
  
  [5.VisualStudio](https://code.visualstudio.com/)

## Implementación y Descarga
  ### Implementacion de API y BBDD
  ### API
   1. Accederemos a la ruta de instalacion de XAMP
   2. Accederemos a la carpeta de "htdocs"
   3. Extraer contenido de "Api" en "htdocs"->([Descargar API](https://monlaues-my.sharepoint.com/:u:/g/personal/raulmenmat_monlau_com/EWqRjukdQIZDnjBIqOkFqeYBvE20obmR5A93XrY6fhk1ig?e=IzZ3RE))
> Para que la API funcione, tenemos que cambiar la ruta de los archivos PHP, la iremos a buscar a la carpeta del PROYECTO
   5. Acceder a la Carpeta del Proyecto Guttmann: "PaginaGuttmannEstructura\aplicacionGuttmann\vendor\autoload.php"
   6. Copiar ruta absoluta del archivo
   7. Una vez hemos copiado la ruta volveremos a los archivos dentro de la carpeta API (PASO 3) 
   8. Entraremos dentro de cada archivo y cambiaremos la ruta Ubicada en la linea 9
      
   ![](/readme_assets/codigo.png)   
  ### BBDD
  1. Ejecutamos XAMP
  2. Iniciamos Apache y MySQL  
  3. Una vez iniciados , seleccionamos "Admin" de MySQL
  ![](/readme_assets/paneldeXAMP.png)
  
  4. Seleccionaremos "Nueva" y crearemos la BBDD con el nombre de "aplicacionguttmann"
  ![](/readme_assets/CrearBBDD.png)
  
  5. vamos a la opcion IMPORTAR (situada en la parte superior de la ventana)
  ![](/readme_assets/ImportarSQL.png)
  
  6. Al final de la ventana encontraremos la Opcion Importar.
  
  ### Proyecto
* Crear una carpeta vacia.
* Acceder dentro mediante terminal
  ### Git Clone
  > git clone https://github.com/guillemsusial/PaginaGuttmannEstructura.git
  ### Git Status
  > git status
  Resultado esperado:
    
    ![](/readme_assets/gitStatus.jpg)

  ### Instalar depencias del proyecto
  > npm install
    
## Posibles Errores al inicar el Proyecto
  1. **Scripts** 
  
   ![](/readme_assets/ErrorScriptsPowershell.png)
  
   * Para resolver este error entraremos en PowerShell como Admin
      > Set-ExecutionPolicy Unrestricted
      
       ![](https://tecnotraffic.net/wp-content/uploads/2020/11/1605567827_547_3-formas-de-cambiar-la-politica-de-ejecucion-de-PowerShell.png)
       
  2. **OutWorkSpace** 
  
   ![](/readme_assets/ErrorAngularOutsideWorkspace.png)
    
   * Para resolver este error deberemos entrar en la carpeta del proyecto

       ![](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2021/07/2-Multi-root-workspace-untitled-ESP32-ESP8266-VS-Code.png?resize=750%2C288&quality=100&strip=all&ssl=1)

  3. **Termino "ng" no se reconoce...**
  
   ![](/readme_assets/41065b1d-3939-4f5d-b986-ff6c600f49ea.jpg)
     
   * Para resolver este error deberemos en las variables de entorno de Windowns     
   * Entrar en variables locales -> Entramos en PATH -> Y añadir:
   
     >C:\Users\%usuario%\AppData\Roaming\npm
     

  
