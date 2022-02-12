# Deno app

## Setup

- install [deno](https://deno.land/manual/getting_started/installation)

Using Shell (macOS and Linux):

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Using PowerShell (Windows):

```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

- install [velociraptor](https://velociraptor.run/docs/installation/) 

```
deno install -qAn vr https://deno.land/x/velociraptor@1.4.0/cli.ts
```

## Run

```
vr run start
vr run serve
```
