import cloudinary from 'cloudinary'
import AlbumCard from './albumCard'

export type FOLDERS = {
  name: string
  path: string
}

const AlbumsPage = async () => {
  const Folders = await cloudinary.v2.api.root_folders() as {folders: FOLDERS[]}

  return (
    <section>
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Albums</h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {Folders.folders.map((folder) => (
          <AlbumCard key={folder.path} folder={folder} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default AlbumsPage