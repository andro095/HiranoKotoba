// React Libraries

// Third Party Libraries
import { ProgressSpinner } from "primereact/progressspinner"

// Components

// Interfaces

// Hooks


export const AuthLoader = () => {
  return (
    <div
        className="absolute w-full h-full flex align-items-center justify-content-center"
    >
        <ProgressSpinner
            strokeWidth="4"
        />
    </div>
  )
}
