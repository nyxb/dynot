import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { isWindows } from 'envizor'
import { getCacheDir } from '../src/utils'

describe('utils', () => {
   describe.skipIf(isWindows)('getCacheDir', () => {
      const cwd = '/cwd'
      const notCwd = `${cwd}__NOT__`

      beforeEach(() => {
         vi.spyOn(process, 'cwd').mockImplementation(() => cwd)
      })

      afterEach(() => {
         vi.restoreAllMocks()
         vi.unstubAllEnvs()
      })

      it('returns the system\'s TMPDIR when TMPDIR is not set', () => {
         const originalTmpdir = process.env.TMPDIR
         delete process.env.TMPDIR
         expect(getCacheDir()).toBe('/tmp/node-dynot')
         process.env.TMPDIR = originalTmpdir
      })

      it('returns TMPDIR when TMPDIR is not CWD', () => {
         vi.stubEnv('TMPDIR', notCwd)
         expect(getCacheDir()).toBe('/cwd__NOT__/node-dynot')
      })

      it('returns the system\'s TMPDIR when TMPDIR is CWD', () => {
         vi.stubEnv('TMPDIR', cwd)
         expect(getCacheDir()).toBe('/tmp/node-dynot')
      })

      it('returns TMPDIR when TMPDIR is CWD and TMPDIR is kept', () => {
         vi.stubEnv('TMPDIR', cwd)
         vi.stubEnv('DYNOT_RESPECT_TMPDIR_ENV', 'true')

         expect(getCacheDir()).toBe('/cwd/node-dynot')
      })
   })
})
