<p align='center'>
  <img src='https://i.ibb.co/LgGYXgh/delta-solutions-logo.jpg' alt='Delta Solution - Menuiserie sur mesure, de l’aluminium au métal.' width='150'/>
</p>

<p align='center'>
Showcase Web App for <b>Delta Solution</b><br>
</p>

<br>

<p align='center'>
<a href="http://delta-solution.tn/">Live Version</a>
</p>

<br>

## Usage

### Development

Just run and visit http://localhost:3333

```bash
yarn dev
```

### Build

To build the App, run

```bash
yarn build
```

### Docker Production Build

First, build the delta image by opening the terminal in the project's root directory.

```bash
docker buildx build . -t delta:latest
```

Run the image and specify port mapping with the `-p` flag.

```bash
docker run --rm -it -p 8080:80 delta:latest
```
