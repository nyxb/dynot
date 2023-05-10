import { accessSync, constants, lstatSync, readFileSync } from 'fs'
import { createHash } from 'crypto'
import { tmpdir } from 'os'
import { join } from 'nyxpath'
import type { PackageJson } from 'pkg-def'

export function getCacheDir() {
   let _tmpDir = tmpdir()

   // Workaround for pnpm setting an incorrect `TMPDIR`.
   // Set `DYNOT_RESPECT_TMPDIR_ENV` to a truthy value to disable this workaround.
   // https://github.com/pnpm/pnpm/issues/6140
   if (
      process.env.TMPDIR
    && _tmpDir === process.cwd()
    && !process.env.DYNOT_RESPECT_TMPDIR_ENV
   ) {
      const _env = process.env.TMPDIR
      delete process.env.TMPDIR
      _tmpDir = tmpdir()
      process.env.TMPDIR = _env
   }

   return join(_tmpDir, 'node-dynot')
}

export function isDir(filename: string): boolean {
   try {
      const stat = lstatSync(filename)
      return stat.isDirectory()
   }
   catch {
      // lstatSync throws an error if path doesn't exist
      return false
   }
}

export function isWritable(filename: string): boolean {
   try {
      accessSync(filename, constants.W_OK)
      return true
   }
   catch {
      return false
   }
}

export function md5(content: string, len = 8) {
   return createHash('md5').update(content).digest('hex').slice(0, len)
}

export function detectLegacySyntax(code: string) {
   return code.match(/\?\.|\?\?/)
}

export function isObject(val: any) {
   return val !== null && typeof val === 'object'
}

export function readNearestPackageJSON(path: string): PackageJson | undefined {
   while (path && path !== '.' && path !== '/') {
      path = join(path, '..')
      try {
         const pkg = readFileSync(join(path, 'package.json'), 'utf8')
         try {
            return JSON.parse(pkg)
         }
         catch {}
         break
      }
      catch {}
   }
}
