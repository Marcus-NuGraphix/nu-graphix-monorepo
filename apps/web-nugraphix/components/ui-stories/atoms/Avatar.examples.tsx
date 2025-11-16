/**
 * Avatar Component Examples
 * 
 * Showcases all features and variations of the Avatar component
 */

import * as React from "react";
import { Avatar } from "@nugraphix/ui";

export function AvatarExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Size Variants */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Size Variants</h3>
        <div className="flex items-end gap-4">
          <Avatar size="xs" name="John Doe" />
          <Avatar size="sm" name="John Doe" />
          <Avatar size="md" name="John Doe" />
          <Avatar size="lg" name="John Doe" />
          <Avatar size="xl" name="John Doe" />
        </div>
      </section>

      {/* Shape Variants */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Shape Variants</h3>
        <div className="flex items-center gap-4">
          <Avatar shape="circle" name="Circle Avatar" />
          <Avatar shape="rounded" name="Rounded Avatar" />
          <Avatar shape="square" name="Square Avatar" />
        </div>
      </section>

      {/* With Images */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">With Images</h3>
        <div className="flex items-center gap-4">
          <Avatar
            src="https://i.pravatar.cc/150?img=1"
            alt="User 1"
            name="Jane Smith"
          />
          <Avatar
            src="https://i.pravatar.cc/150?img=2"
            alt="User 2"
            name="John Doe"
            size="lg"
          />
          <Avatar
            src="https://i.pravatar.cc/150?img=3"
            alt="User 3"
            name="Alice Johnson"
            shape="rounded"
          />
        </div>
      </section>

      {/* Status Indicators */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Status Indicators</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Online User"
            status="online"
            showStatus
          />
          <Avatar
            name="Busy User"
            status="busy"
            showStatus
          />
          <Avatar
            name="Away User"
            status="away"
            showStatus
          />
          <Avatar
            name="Offline User"
            status="offline"
            showStatus
          />
        </div>
      </section>

      {/* With Images and Status */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Images with Status</h3>
        <div className="flex items-center gap-4">
          <Avatar
            src="https://i.pravatar.cc/150?img=4"
            name="Sarah Williams"
            status="online"
            showStatus
            size="lg"
          />
          <Avatar
            src="https://i.pravatar.cc/150?img=5"
            name="Mike Brown"
            status="busy"
            showStatus
            size="lg"
          />
        </div>
      </section>

      {/* Interactive Avatars */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Interactive</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Click Me"
            onClick={() => alert("Avatar clicked!")}
            role="button"
          />
          <Avatar
            src="https://i.pravatar.cc/150?img=6"
            name="Hover Me"
            isInteractive
            size="lg"
          />
        </div>
      </section>

      {/* Initials Generation */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Initials Generation</h3>
        <div className="flex items-center gap-4">
          <Avatar name="John Doe" />
          <Avatar name="Sarah" />
          <Avatar name="Maria Elena Rodriguez" />
          <Avatar name="X Æ A-12" />
        </div>
      </section>

      {/* Fallback States */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Fallback States</h3>
        <div className="flex items-center gap-4">
          <Avatar name="No Image" />
          <Avatar /> {/* No name, no image - shows "?" */}
          <Avatar fallback={<span>👤</span>} />
          <Avatar fallback="AB" name="Will Be Ignored" />
        </div>
      </section>

      {/* Error Handling */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Error Handling</h3>
        <div className="flex items-center gap-4">
          <Avatar
            src="https://invalid-url-that-will-fail.com/image.jpg"
            name="Broken Image"
          />
          <Avatar
            src="/non-existent-image.jpg"
            name="Falls Back to Initials"
          />
        </div>
      </section>

      {/* Loading State */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Loading State</h3>
        <div className="flex items-center gap-4">
          <Avatar
            src="https://via.placeholder.com/150?text=Loading..."
            name="Loading"
          />
        </div>
      </section>

      {/* Avatar Group/Stack */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Avatar Stack</h3>
        <div className="flex -space-x-3">
          <Avatar
            src="https://i.pravatar.cc/150?img=7"
            name="User 1"
            className="ring-2 ring-(--color-surface)"
          />
          <Avatar
            src="https://i.pravatar.cc/150?img=8"
            name="User 2"
            className="ring-2 ring-(--color-surface)"
          />
          <Avatar
            src="https://i.pravatar.cc/150?img=9"
            name="User 3"
            className="ring-2 ring-(--color-surface)"
          />
          <Avatar
            name="+5"
            className="ring-2 ring-(--color-surface) bg-(--color-primary) text-(--color-primary-foreground)"
          />
        </div>
      </section>

      {/* Custom Styling */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Custom Styling</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Custom"
            className="bg-(--color-primary) text-(--color-primary-foreground)"
          />
          <Avatar
            name="Danger"
            className="bg-(--color-danger) text-(--color-danger-foreground)"
          />
          <Avatar
            name="Success"
            className="bg-(--color-success) text-(--color-success-foreground)"
          />
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">Accessibility</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Keyboard Navigable"
            onClick={() => alert("Activated!")}
            role="button"
            aria-label="User profile for John Doe"
          />
          <p className="text-sm text-(--color-foreground-muted)">
            Try tabbing to the avatar and pressing Enter or Space
          </p>
        </div>
      </section>
    </div>
  );
}
